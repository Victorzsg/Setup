package user

import (
	"../../common/helper/responseHelper"
	"../../common/returnCode"
	"github.com/gin-gonic/gin"
	"strconv"
)

func Test(c *gin.Context) {

	idStr := c.Query("id")
	id, err := strconv.ParseUint(idStr, 10, 64)
	if id <= 0 && err != nil {
		responseHelper.Error(c, returnCode.ERR_PARAMS)
		return
	}
	responseHelper.OK(c, gin.H{"user": 1,})
	return
}
