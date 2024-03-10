import axios from 'axios';

const BASE_URL = 'https://diary.es6.kr';

// 다이어리 날짜별 조회
export const getDiaryByDate = async (date: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/diaries/${date}`);
    return response.data;
  } catch (error) {
    console.error('다이어리 조회 에러:', error);
    throw error;
  }
};

// 다이어리 생성
export const createDiary = async (content, date, imageFile) => {
  const formData = new FormData();
  formData.append('content', content);
  formData.append('date', date);
  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  try {
    const response = await axios.post(`${BASE_URL}/diaries`, formData, {
      headers: {
        // 필요한 경우 인증 헤더를 여기에 추가하세요.
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('다이어리 생성 에러:', error);
    throw error;
  }
};

// 다이어리 삭제
export const deleteDiary = async (diaryId: number) => {
  try {
    await axios.delete(`${BASE_URL}/diaries/${diaryId}`);
  } catch (error) {
    console.error('다이어리 삭제 에러:', error);
    throw error;
  }
};

// 다이어리 수정
export const updateDiary = async (
  diaryId: number,
  content: string,
  date?: string,
  imageFile?: File,
) => {
  const formData = new FormData();
  if (content) formData.append('content', content);
  if (date) formData.append('date', date);
  if (imageFile) formData.append('imageFile', imageFile);

  try {
    await axios.patch(`${BASE_URL}/diaries/${diaryId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('다이어리 수정 에러:', error);
    throw error;
  }
};

// 다이어리 월별 조회
export const getDiariesByMonth = async (month: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/diaries?month=${month}`);
    return response.data;
  } catch (error) {
    console.error('월별 다이어리 조회 에러:', error);
    throw error;
  }
};
