package config

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"main.go/models"
)

var (
	db  *gorm.DB
	err error
)

func StartDB() {
	var (
		host     = "localhost"
		user     = "postgres"
		password = "postgres"
		dbport   = "5432"
		dbname   = "cashier_app"
	)
	config := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", host, user, password, dbname, dbport)
	db, err = gorm.Open(postgres.Open(config), &gorm.Config{})

	if err != nil {
		log.Fatal("error connecting to database :", err)
	}

	log.Println("sukses koneksi ke database")
	db.Debug().AutoMigrate(models.Item{}, models.Bill{}, models.Customer{})
}

func GetDB() *gorm.DB {
	return db
}
