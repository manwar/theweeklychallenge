# Configure the Docker provider
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

# Define the Docker image to be built
resource "docker_image" "theweeklychallenge" {
  name = "theweeklychallenge:latest"
  build {
    context = "."
    tag     = ["theweeklychallenge:latest"]
  }
}

# Output the image ID after creation
output "image_id" {
  value = docker_image.theweeklychallenge.image_id
}
