package route

import (
	"../controllers/activity"
	"../controllers/user"
	"github.com/gin-gonic/gin"
)

func registerRouter(route *gin.Engine) {

	route.GET("/users", user.Test)
	route.GET("/activity", activity.List)
}
