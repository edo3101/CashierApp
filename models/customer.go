package models

type Customer struct {
	ID   uint `gorm:"primaryKey" json:"id"`
	Name string
}
