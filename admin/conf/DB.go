package conf

import "strings"

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

func GetDbConf(mode string) *DB {
	ret := DB{}
	for _, x := range db {
		if strings.EqualFold(x.MODE, mode) {
			ret = x
		}
	}
	return &ret
}
