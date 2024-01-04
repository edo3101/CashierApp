package controllers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"main.go/config"
	"main.go/models"
)

func GetFoodByID(c *gin.Context) {
	db := config.GetDB()
	Food := models.Food{}
	FoodID, _ := strconv.Atoi(c.Param("id"))

	Food.ID = uint(FoodID)
	err := db.Model(&Food).Where("id = ?", FoodID).Find(&Food).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Bad Request",
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "getting food...",
		"data":    Food,
	})
}
