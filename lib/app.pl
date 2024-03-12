# app.pl

use Dancer2;
use MyApp::Schema qw();

# Connect to the database
my $schema = MyApp::Schema->connect(
    'dbi:mysql:database=pwc;host=localhost',
    'username', #replace with database username
    'password', #replace with password or leave empty if no password    
    { RaiseError => 1, PrintError => 0, AutoCommit => 1 }
);

# Set schema for Dancer2 app
set schema => $schema;

# Routes
get '/' => sub {
    return "Welcome to the Weekly Challenge - Outreachy Program!";
};

# Define other routes as needed...
start;
