package models

import (
	"../conf"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"os"
	"time"
)

//公共字段
type CommonField struct {
	ID         uint64    `gorm:"primary_key"`
	IsDeleted  byte      `gorm:"is_deleted"`
	CreateTime time.Time `gorm:"-"`
	UpdateTime time.Time `gorm:"-"`
}

var Orm *gorm.DB

func init() {
	var err error
	dbConf := conf.GetDbConf(os.Getenv("ACTIVITY_MODE"))
	Orm, err = gorm.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=True&charset=utf8",
		dbConf.DATABASE_USERNAME, dbConf.DATABASE_PASSWORD, dbConf.DATABASE_HOST, dbConf.DATABASE_PORT, dbConf.DATABASE_NAME))
	if err != nil {
		//记录日志
		panic(err)
		return
	}
	Orm.DB().SetMaxOpenConns(conf.DefaultMaxOpenConns)
	Orm.DB().SetMaxIdleConns(conf.DefaultMaxIdleConns)
}
