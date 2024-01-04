package models

type Bill struct {
	Customer
	ID    uint
	Item  []OrderItem
	Total float64
}
