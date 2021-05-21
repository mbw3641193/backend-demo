# backend-demo
这是一个前后端 都有的项目。前端react,后端nestjs

# 本地调试：

### npm i
### npm run start:dev / F5 进入debug

# 包含：

1. CI/CD pipeline
该后端运行在heroku，代码存储在github。当main分支代码推送后，github进行CI，heroku进行自动的集成和部署

2. 接口设计：
使用工厂模式

3. log日志 ：
每次调用都会记录一条log，如果出现错误信息，则会有错误log

4. 参数校验：
如果传入的参数不是字符串，程序会报出错误

5. 单元测试:
一个简单的单元测试，测试方法返回值是不是Promise的实例

# 调用接口方法：

https://weather-demo1233.herokuapp.com/api/backend/v1/weather/list?city=Sydney 获取悉尼的天气
https://weather-demo1233.herokuapp.com/api/backend/v1/weather/list?city=Melbourne 获取墨尔本的天气
https://weather-demo1233.herokuapp.com/api/backend/v1/weather/list?city=Wollongong 获取卧龙岗的天气
