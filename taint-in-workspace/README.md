`terraform taint` doesn't check workspace tfstate
=====

terraform v0.12.5

1. `terraform init`
1. `terraform workspace new develop`
1. `terraform apply`
1. `terraform taint aws_instance.main`
    - doesn't work
1. `terraform taint -state terraform.tfstate.d/develop/terraform.tfstate aws_instance.main`
    - works as expected
