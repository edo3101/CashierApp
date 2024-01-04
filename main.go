package main

import (
	"log"

	"main.go/config"
	"main.go/router"
)

func main() {
	config.StartDB()
	r := router.StartApp()
	log.Println("starting app...")
	r.Run(":5000")
}
