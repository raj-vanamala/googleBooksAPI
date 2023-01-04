import { render, screen } from '@testing-library/react';
import Statistics from '../Components/Statistics';

describe("Checks all statistics elements present" , ()=> {
  test('Statistics Accordian Present', () => {
    const totalItems = 20;
    const EarlyPublishedDate = "2019-10-10";
    const LatestPublishedDate = "2019-10-10";
    const serverResponseTime = "100ms";
    render(<Statistics 
        totalItems = {totalItems}
        EarlyPublishedDate = {EarlyPublishedDate}
        LatestPublishedDate = {LatestPublishedDate}
        serverResponseTime = {serverResponseTime}
    />);
    const linkElement = screen.getByText(/Statistics/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Total Items Present', () => {
    const totalItems = 20;
    const EarlyPublishedDate = "2019-10-10";
    const LatestPublishedDate = "2019-10-10";
    const serverResponseTime = "100ms";
    render(<Statistics 
        totalItems = {totalItems}
        EarlyPublishedDate = {EarlyPublishedDate}
        LatestPublishedDate = {LatestPublishedDate}
        serverResponseTime = {serverResponseTime}
    />);
    const linkElement = screen.getByText(/Total Items/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Earliest Published Date Present', () => {
    const totalItems = 20;
    const EarlyPublishedDate = "2019-10-10";
    const LatestPublishedDate = "2019-10-10";
    const serverResponseTime = "100ms";
    render(<Statistics 
        totalItems = {totalItems}
        EarlyPublishedDate = {EarlyPublishedDate}
        LatestPublishedDate = {LatestPublishedDate}
        serverResponseTime = {serverResponseTime}
    />);
    const linkElement = screen.getByText(/Earliest Published Date/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Latest Published Date Present', () => {
    const totalItems = 20;
    const EarlyPublishedDate = "2019-10-10";
    const LatestPublishedDate = "2019-10-10";
    const serverResponseTime = "100ms";
    render(<Statistics 
        totalItems = {totalItems}
        EarlyPublishedDate = {EarlyPublishedDate}
        LatestPublishedDate = {LatestPublishedDate}
        serverResponseTime = {serverResponseTime}
    />);
    const linkElement = screen.getByText(/Latest Published Date/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Server Response Time Present', () => {
    const totalItems = 20;
    const EarlyPublishedDate = "2019-10-10";
    const LatestPublishedDate = "2019-10-10";
    const serverResponseTime = "100ms";
    render(<Statistics 
        totalItems = {totalItems}
        EarlyPublishedDate = {EarlyPublishedDate}
        LatestPublishedDate = {LatestPublishedDate}
        serverResponseTime = {serverResponseTime}
    />);
    const linkElement = screen.getByText(/Server Response Time/i);
    expect(linkElement).toBeInTheDocument();
  });
});