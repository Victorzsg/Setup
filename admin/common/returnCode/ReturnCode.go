package returnCode

const (
	//系统错误
	STATUS_OK    = 1
	ERR_SYS      = 1000
	ERR_CACHE    = 1001
	ERR_NO_LOGIN = 1002
	ERR_PARAMS   = 1003
)

var Msg = map[int]string{
	STATUS_OK:    "SUCCESS",
	ERR_SYS:      "系统错误",
	ERR_CACHE:    "缓存错误",
	ERR_NO_LOGIN: "未登录",
	ERR_PARAMS:   "参数错误",
}
