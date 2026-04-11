import React from 'react';

export interface CardProps {
  title: string;
  type: "green" | "white" | "black";
  imageUrl?: string;
  footer?: React.ReactNode;
  badgeLabel: string;
  badgeStatus?: "success" | "warning" | "info" | "error" | "neutral";
}