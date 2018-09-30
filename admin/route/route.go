package route

import (
	"github.com/gin-contrib/pprof"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"strings"
)

func initRouter() *gin.Engine {
	router := gin.New()

	//Profiling
	if strings.EqualFold("prod", os.Getenv("ACTIVITY_MODE")) {
		pprof.Register(router)
	}

	router.NoRoute(func(context *gin.Context) {
		context.JSON(http.StatusNotFound, gin.H{
			"code": 404,
			"msg":  "找不到该路由",
		})
		return
	})

	router.NoMethod(func(context *gin.Context) {
		context.JSON(http.StatusNotFound, gin.H{
			"code": 404,
			"msg":  "找不到该方法",
		})
		return
	})

	return router
}
