import { render, screen } from '@testing-library/react';
import SearchResults from '../Components/SearchResults';

describe("Display Results" , ()=> {
  test('Show Accordian with Below data', () => {

    const items = [
        {
            volumeInfo : {
                authors : ['Julie Johnson-Hillery', 'Jikyeong Kang'],
                description : "Originally published in 1997. Based around the author's observations and experiences in the fashion retailing industry and later dissertation research",
                title: "Elderly Consumers and Retail Sales Personnel"
            }
        }
    ]
    render(<SearchResults {...items} />);
    const linkElement = screen.getByText(/Elderly Consumers and Retail Sales Personnel/i);
    expect(linkElement).toBeInTheDocument();
  });
});