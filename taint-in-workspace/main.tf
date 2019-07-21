terraform {
  required_version = ">= 0.12.5"
}

provider "aws" {
  version = "~> 2.4"
  region  = "ap-northeast-1"
}

data "aws_ami" "ubuntu-1804" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}


resource "aws_instance" "main" {
  ami           = data.aws_ami.ubuntu-1804.id
  instance_type = "t2.micro"
}
