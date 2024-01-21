package models

type OrderItem struct {
	ID       uint `gorm:"primaryKey" json:"id"`
	OrderID  uint `json:"order_id"`
	ItemID   uint `json:"item_id"`
	Quantity int  `json:"quantity"`
}
