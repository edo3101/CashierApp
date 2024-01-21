package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"main.go/controllers"
)

func StartApp() *gin.Engine {
	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173", "http://localhost:5000", "http://127.0.0.1:5000", "http://127.0.0.1:5173", "http://192.168.1.11:3000", "http://localhost:3000"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}
	config.AllowCredentials = true
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	r.Use(cors.New(config))

	itemRouter := r.Group("/item")
	{
		itemRouter.GET("/:id", controllers.GetItemByID)
		itemRouter.GET("/items", controllers.GetAllItem)
	}

	return r
}
