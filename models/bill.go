package models

type Bill struct {
	Customer
	ID    uint                   `gorm:"primaryKey" json:"id"`
	Items map[string]interface{} `gorm:"type:text"`
	Total float64                `json:"total"`
}
