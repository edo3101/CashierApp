package router

import (
	"github.com/gin-gonic/gin"
	"main.go/controllers"
)

func StartApp() *gin.Engine {
	r := gin.Default()

	foodRouter := r.Group("/food")
	{
		foodRouter.GET("/:id", controllers.GetFoodByID)
	}

	return r
}
