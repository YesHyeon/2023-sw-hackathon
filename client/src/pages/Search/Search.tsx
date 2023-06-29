import { useState } from "react";
import {
    Btn,
    Box,
    Container,
    Input,
    TitleBox,
    Wraaper,
    Title,
    Contents,
} from "./Search.style";

function Search() {
    const [value, setValue] = useState("");
    const onChange = (event: any) => setValue(event.target.value);
    return (
        <Wraaper>
            <Container>
                <Box>
                    <TitleBox>
                        <Title>가치가요</Title>
                        <Contents>
                            병 이름을 입력하시면 우리 집 근처, 가장 알맞은
                            병원을 추천해드려요!
                        </Contents>
                    </TitleBox>
                    <Input
                        onChange={onChange}
                        type="text"
                        value={value}
                        placeholder="입력"
                    />
                    <Btn type="submit" disabled={!value}>
                        병원찾기
                    </Btn>
                </Box>
            </Container>
        </Wraaper>
    );
}
export default Search;
