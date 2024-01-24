package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/config"
	"main.go/models"
)

func CreateCustomer(c *gin.Context) {
	db := config.GetDB()
	newCustomer := models.Customer{}

	err := db.Debug().Create(&newCustomer).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Bad Request",
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusAccepted, newCustomer)
}
