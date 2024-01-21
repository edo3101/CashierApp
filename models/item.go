package models

type Item struct {
	ID      uint    `gorm:"primaryKey" json:"id"`
	Name    string  `json:"name"`
	Price   float64 `json:"price"`
	Img_url string  `json:"img_url"`
}
