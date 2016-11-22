import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export const renderInput = field => (
  <Input
    label={...field.label}
    required={...field.isRequired}
    error={field.touched && field.error ? `This field, ${...field.label}, is required.` : null}
    {...field.input}
    {...field.custom}
  />
);
