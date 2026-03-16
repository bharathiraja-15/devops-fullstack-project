resource "aws_instance" "worker" {
 ami           = "ami-0974a2c5ddf10f442"
 instance_type = "t3.medium"

 tags = {
  Name = "k8s-worker"
 }
}