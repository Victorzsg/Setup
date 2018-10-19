package Activity

import (
	"../../models"
	"time"
)

type Activity struct {
	models.CommonField
	ActivityName string    `gorm:"column:activity_name"` // 设置列名为`activity_name`(默认即为转为下划线，可以不用写该语句)
	StartTime    time.Time `gorm:"-"`
	EndTime      time.Time `gorm:"-"`
	ActivityDesc string    `gorm:"-"`
}

func (Activity) TableName() string {
	return "setup_activity"
}
