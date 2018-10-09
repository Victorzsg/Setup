package activitycontroller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetList(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"code": 0,
		"msg":  "ok",
		"data": gin.H{
			"user": 1,
		},
	})
}
