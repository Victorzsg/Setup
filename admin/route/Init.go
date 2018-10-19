package route

import (
	"../conf"
	"github.com/gin-contrib/pprof"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"strconv"
	"strings"
)

type APIServer struct {
	engine *gin.Engine
}

func (a *APIServer) initRouter() *gin.Engine {

	//Profiling
	if strings.EqualFold("prod", os.Getenv("ACTIVITY_MODE")) {
		pprof.Register(a.engine)
	}

	a.engine.NoRoute(func(context *gin.Context) {
		context.JSON(http.StatusNotFound, gin.H{
			"code": 404,
			"msg":  "找不到该路由",
		})
		return
	})

	a.engine.NoMethod(func(context *gin.Context) {
		context.JSON(http.StatusNotFound, gin.H{
			"code": 404,
			"msg":  "找不到该方法",
		})
		return
	})

	//register router
	registerRouter(a.engine)

	return a.engine
}

func (a *APIServer) Start() {

	env := conf.GetEnvConf(os.Getenv("ACTIVITY_MODE"))

	a.initRouter()
	a.engine.Run(":" + strconv.Itoa(env.SERVER_PORT))
}

func New() *APIServer {
	return &APIServer{
		engine: gin.Default(),
	}
}
