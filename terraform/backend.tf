terraform {
  backend "s3" {
    bucket         = "peter-kvac-terraform-state"
    key            = "resume-website/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "peter-kvac-terraform-locks"
  }
}