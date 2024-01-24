package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/config"
	"main.go/models"
)

func CreateBill(c *gin.Context) {
	db := config.GetDB()
	newBill := models.Bill{}

	err := db.Create(&newBill).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusAccepted, newBill)
}
