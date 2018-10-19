package main

import (
	"./route"
	"github.com/gin-gonic/gin"
	"os"
	"strings"
)

func main() {

	//read system environment variable【prod,test,dev】
	mode := os.Getenv("ACTIVITY_MODE")
	if strings.EqualFold("prod", mode) {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	route.New().Start()
	//
	//route := gin.Default()
	//route.GET("/testing", startPage)
	//route.Run(":8085")
	//models.Model.Create(&models.User{Name: "fff", Avatar: "zzz", Sex: 1})
	//
	//var user models.User
	//models.Model.First(&user, 1)
	//models.Model.Model(&user).Update("avatar", "")
	//fmt.Printf("Element %s\n", mode)
	//conf.GetDbConf(mode)
}
