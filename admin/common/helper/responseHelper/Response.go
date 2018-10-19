package responseHelper

import (
	"../../returnCode"
	"github.com/gin-gonic/gin"
	"net/http"
)

func OK(c *gin.Context, ret interface{}) {
	c.JSON(http.StatusOK, gin.H{
		"code": returnCode.STATUS_OK,
		"msg":  returnCode.Msg[returnCode.STATUS_OK],
		"data": ret,
	})
}

func Error(c *gin.Context, code int) {
	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  returnCode.Msg[code],
		"data": "",
	})
}
