package route

import (
	"../controllers/activity"
	"../controllers/user"
	"github.com/gin-gonic/gin"
)

func registerRouter(route *gin.Engine) {

	route.GET("/users", usercontroller.Test)
	route.GET("/activity", activitycontroller.GetList)
}
