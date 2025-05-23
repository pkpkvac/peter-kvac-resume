variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-west-2"
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
  default     = "peter-kvac.com"
}