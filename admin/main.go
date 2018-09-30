package main

import (
	"./conf"
	"./models"
	"fmt"
	"github.com/gin-gonic/gin"
	"os"
)

func main() {

	//read system environment variable
	mode := os.Getenv("ACTIVITY_MODE")

	route := gin.Default()
	route.GET("/testing", startPage)
	route.Run(":8085")
	models.Model.Create(&models.User{Name: "fff", Avatar: "zzz", Sex: 1})

	var user models.User
	models.Model.First(&user, 1)
	models.Model.Model(&user).Update("avatar", "")
	fmt.Printf("Element %s\n", mode )
	conf.GetDbConf(mode)
}
