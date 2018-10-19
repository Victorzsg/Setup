package activity

import (
	"../../common/helper/responseHelper"
	"../../common/returnCode"
	"../../models"
	"../../models/Activity"
	"github.com/gin-gonic/gin"
	"strings"
)

func List(c *gin.Context) {

	activityIds := c.Query("ids")
	if activityIds == "" {
		responseHelper.Error(c, returnCode.ERR_PARAMS)
		return
	}

	var activities []*Activity.Activity
	idsSlice := strings.Split(activityIds, ",")
	models.Orm.Where("id in (?)", idsSlice).Find(&activities)

	responseHelper.OK(c, activities)
}

func Show(c *gin.Context) {

}
