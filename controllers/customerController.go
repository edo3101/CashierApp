package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/config"
	"main.go/models"
)

func CreateCustomer(c *gin.Context) {
	db := config.GetDB()
	Customer := models.Customer{}

	if err := c.ShouldBindJSON(&Customer); err != nil {
		c.Status(http.StatusBadRequest)
	}

	err := db.Debug().Create(&Customer).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Bad Request",
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusAccepted, Customer)
}
