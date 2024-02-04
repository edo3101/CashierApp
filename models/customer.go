package models

type Customer struct {
	ID   uint   `gorm:"primaryKey"`
	Name string `json:"Name"`
}
