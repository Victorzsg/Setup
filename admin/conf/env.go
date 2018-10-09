package conf

import "strings"

type ENV struct {
	MODE        string
	SERVER_PORT int
}

var env = [...]ENV{
	{
		//development environment
		MODE:        "dev",
		SERVER_PORT: 5003,
	},
	{
		//test environment
		MODE:        "test",
		SERVER_PORT: 5003,
	},
	{
		//production environment
		MODE:        "prod",
		SERVER_PORT: 5003,
	},
}

func GetEnvConf(mode string) *ENV {
	ret := ENV{}
	for _, x := range env {
		if strings.EqualFold(x.MODE, mode) {
			ret = x
		}
	}
	return &ret
}
