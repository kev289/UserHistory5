import React from 'react';

export interface BadgeProps {
  label: string;
  status?: "success" | "warning" | "info" | "error" | "neutral";
  icon?: React.ReactNode;
}