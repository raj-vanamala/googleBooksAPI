
import '../Styles/GoogleBooksForm.css'
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Download , Filter, LibraryRestrict, OrderBy, PrintType, Projection} from '../ENUMS/enums'
import { useState } from 'react';
import SearchResults from './SearchResults';
import Statistics from './Statistics';
import Pagination from './Pagination';


type FormData = {
    q: string;
    download: Download;
    filter: Filter;
    langRestrict : string;
    libraryRestrict: LibraryRestrict;
    maxResults: number;
    orderBy : OrderBy;
    partner: string;
    printType: PrintType;
    projection: Projection;
    showPreorders: string;
    source: string;
    startIndex: number;
};

export default function GoogleBooksForm() { 

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [searchResults , setSearchResults] = useState([]);
    const [maxResults , setMaxResults] = useState([]);
    const [serverResponseTime , setserverResponseTime] = useState<string>();
    const [totalItems , setTotalItems] = useState<number>();
    const [EarlyPublishedDate , setEarlyPublishedDate] = useState<string>();
    const [LatestPublishedDate , setLatestPublishedDate] = useState<string>();
    const [commonAuthor , setCommonAuthor] = useState<string>();
    const [paginateResults , setPaginateResults] = useState<number[]>();


    const generateQueryString = (formData: FormData) => {

        let queryString : string = "";
        for (let [key, value] of Object.entries(formData)) {
            if(value) {
            queryString += `${key}=${value}&`;
            }
        }
        queryString = queryString.slice(0 , queryString.length-1)
        return queryString;
    }

    const findMostCommonAuthor = (authors : string[]) : string => {

      authors.sort((author1 , author2)=>author1.trim().localeCompare(author2.trim()));
      const map = authors.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
      
      let commonAuthor = "" , previousfrequency = 0;
      for(let entry of Array.from(map.entries())) {
        let [author , frequency] = entry;
        if(frequency > previousfrequency) {
          commonAuthor = author;
          previousfrequency = frequency;
        }
      }
      return commonAuthor;
    }


    const isValidDate = (date: string) => {
      if(date)
        return date;
    }

    const setStatisticsProps = (data : any) => {
        const publishedDates = data.items.map((entry: { volumeInfo: { publishedDate: string; }; }) => entry.volumeInfo.publishedDate).filter(isValidDate);
        let authors: string[] = [];
        data.items.forEach((entry: any) => {
            entry?.volumeInfo?.authors?.forEach((author: string) => {
              authors.push(author);
            })
        })
        setCommonAuthor(findMostCommonAuthor(authors));
        publishedDates.sort();
        setEarlyPublishedDate(publishedDates[0]);
        setLatestPublishedDate(publishedDates[publishedDates.length-1]);
        setTotalItems(data.totalItems);
        setMaxResults(data.items);
        setPaginateResults(Array(Math.ceil(data.items.length/10)).fill(0).map((e,i)=>i+1));
        setSearchResults(data.items.slice(0,10));
    }

    const setPaginationResults = (maxResultsNumber : number ) => {
      setSearchResults(maxResults.slice(0,maxResultsNumber))
    }

    const onSubmit = (formData : FormData) => {
        const queryString = generateQueryString(formData);
        const URL =`https://www.googleapis.com/books/v1/volumes?key=AIzaSyDZ-pwI-uYCL_1m8_1pVNsHNuP0X_oXxFo&${queryString}`;
        let serverResponseTime:string = "";
        let callInitiatedAt = (new Date()).getTime();
        let responseReceivedAt: number;


        fetch(URL)
        .then(response => {
            responseReceivedAt = (new Date()).getTime();
            serverResponseTime = responseReceivedAt - callInitiatedAt + "ms";
            setserverResponseTime(serverResponseTime);
            return response.json();
        })
        .then(data => {
            setStatisticsProps(data);
        })
        .catch(error => console.log(error))

    };

    return <Container fluid style={{margin: "2%"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row style={{margin: "1%"}}>
          <Col lg="3">
            <label>Query</label>
            <input {...register("q", { required: true })} />
            {errors.q?.type === 'required' && <p role="alert">Query is required</p>}
          </Col>
          <Col lg="3">
            <label>Download</label>
            <select {...register("download")} >
              <option value="epub">epub</option>
            </select>
          </Col>
          <Col lg="3">
            <label>Filter</label>
            <select {...register("filter")} >
              <option value="ebooks">ebooks</option>
              <option value="free-ebooks">free-ebooks</option>
              <option value="full">full</option>
              <option value="paid-ebooks">paid-ebooks</option>
              <option value="partial">partial</option>
            </select>
          </Col>
          <Col lg="3">
            <label>LangRestrict</label>
            <input {...register("langRestrict")} />
          </Col>
        </Row>
        <Row style={{margin: "1%"}}>
          <Col lg="3">
            <label>LibraryRestrict</label>
            <select {...register("libraryRestrict")} >
              <option value="my-library">my-library</option>
              <option value="no-restrict">no-restrict</option>
            </select>
          </Col>
          <Col lg="3">
            <label>MaxResults</label>
            <input value="40" {...register("maxResults")} />
          </Col>
          <Col lg="3">
            <label>OrderBy</label>
            <select {...register("orderBy")} >
              <option value="newest">newest</option>
              <option value="relevance">relevance</option>
            </select>
          </Col>
          <Col lg="3">
            <label>Partner</label>
            <input {...register("partner")} />
          </Col>
        </Row>
        <Row style={{margin: "1%"}}>
          <Col lg="3">
            <label>PrintType</label>
            <select {...register("printType")} >
              <option value="all">all</option>
              <option value="books">books</option>
            </select>
          </Col>
          <Col lg="3">
            <label>Projection</label>
            <select {...register("projection")} >
              <option value="full">full</option>
              <option value="lite">lite</option>
            </select>
          </Col>
          <Col lg="3">
            <label>ShowPreorders</label>
            <select {...register("showPreorders")} >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </Col>
          <Col lg="3">
            <label>Source</label>
            <input {...register("source")} />
          </Col>
        </Row>
        <Row style={{margin: "1%"}}>
          <Col lg="3">
            <label>StartIndex</label>
            <input {...register("startIndex")} />
          </Col>
          <Col lg="3">
            <Button as="input" type="submit" variant="primary"/>
          </Col>
        </Row>
      </form>
      <Row>
        <Col lg="12"><center><h1>Search Results</h1></center></Col>
      </Row>
    {
            (searchResults && searchResults.length > 0) ? <>
                <Row style={{margin: "1%"}}>
                    <Statistics 
                        totalItems = {totalItems}
                        commonAuthor = {commonAuthor}
                        EarlyPublishedDate = {EarlyPublishedDate}
                        LatestPublishedDate = {LatestPublishedDate}
                        serverResponseTime = {serverResponseTime}
                    />
                </Row>
                <Row style={{margin: "5%"}}>
                    <SearchResults {...searchResults}/> 
                </Row>
                <Row>
                    <Pagination 
                        setPaginationResults = {setPaginationResults}
                        paginateResults = {paginateResults}
                    />
                </Row>
            </> : ""
    }
    </Container>
}

