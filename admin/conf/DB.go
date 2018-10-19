package conf

import (
	"strings"
)

type DB struct {
	MODE              string
	DATABASE_HOST     string
	DATABASE_PORT     string
	DATABASE_USERNAME string
	DATABASE_PASSWORD string
	DATABASE_NAME     string

	REDIS_HOST     string
	REDIS_PORT     string
	REDIS_PASSWORD string
	REDIS_DB       int
}

var db = [...]DB{
	{
		//development environment
		MODE:              "dev",
		DATABASE_HOST:     "127.0.0.1",
		DATABASE_PORT:     "3306",
		DATABASE_USERNAME: "root",
		DATABASE_PASSWORD: "root",
		DATABASE_NAME:     "activity",

		REDIS_HOST:     "127.0.0.1",
		REDIS_PORT:     "6379",
		REDIS_PASSWORD: "",
		REDIS_DB:       0,
	},
	{
		//test environment
		MODE:              "test",
		DATABASE_HOST:     "192.168.17.133",
		DATABASE_PORT:     "3306",
		DATABASE_USERNAME: "root",
		DATABASE_PASSWORD: "Zsg@631985789",
		DATABASE_NAME:     "db_setup",

		REDIS_HOST:     "127.0.0.1",
		REDIS_PORT:     "6379",
		REDIS_PASSWORD: "",
		REDIS_DB:       0,
	},
	{
		//production environment
		MODE:              "prod",
		DATABASE_HOST:     "127.0.0.1",
		DATABASE_PORT:     "3306",
		DATABASE_USERNAME: "root",
		DATABASE_PASSWORD: "root",
		DATABASE_NAME:     "activity",

		REDIS_HOST:     "127.0.0.1",
		REDIS_PORT:     "6379",
		REDIS_PASSWORD: "",
		REDIS_DB:       0,
	},
}

const (
	DefaultMaxOpenConns = 20 //数据库最大连接数
	DefaultMaxIdleConns = 0  //数据最大空闲连接数
)

func GetDbConf(mode string) *DB {
	ret := DB{}
	for _, x := range db {
		if strings.EqualFold(x.MODE, mode) {
			ret = x
		}
	}
	return &ret
}
