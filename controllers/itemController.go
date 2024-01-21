package controllers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"main.go/config"
	"main.go/models"
)

func getItemPrice(itemID uint) float64 {
	db := config.GetDB()

	item := models.Item{}
	db.First(&item, itemID)
	return item.Price
}

func GetItemByID(c *gin.Context) {
	db := config.GetDB()
	Item := models.Item{}
	ItemID, _ := strconv.Atoi(c.Param("id"))

	Item.ID = uint(ItemID)
	err := db.Model(&Item).Where("id = ?", ItemID).Find(&Item).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Bad Request",
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "getting Item...",
		"data":    Item,
	})
}

func GetAllItem(c *gin.Context) {
	db := config.GetDB()
	Item := []models.Item{}

	err := db.Debug().Find(&Item).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Bad Request",
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, Item)
}
