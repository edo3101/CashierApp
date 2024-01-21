package models

type Bill struct {
	ID    uint        `gorm:"primaryKey" json:"id"`
	Items []OrderItem `gorm:"foreignKey:OrderID" json:"items"`
	Total float64     `json:"total"`
}
