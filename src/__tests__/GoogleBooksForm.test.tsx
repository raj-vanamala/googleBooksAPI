

import { render, screen } from '@testing-library/react';
import GoogleBooksForm from '../Components/GoogleBooksForm';

describe("Checks all form elements" , ()=> {
  test('Query form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Query/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Download form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Download/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Filter form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Filter/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('LangRestrict form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/LangRestrict/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('LibraryRestrict form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/LibraryRestrict/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('MaxResults form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/MaxResults/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('OrderBy form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/OrderBy/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Partner form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Partner/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('PrintType form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/PrintType/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Projection form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Projection/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('ShowPreorders form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/ShowPreorders/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Source form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/Source/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('StartIndex form field', () => {
    render(<GoogleBooksForm />);
    const linkElement = screen.getByText(/StartIndex/i);
    expect(linkElement).toBeInTheDocument();
  });
})