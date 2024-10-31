import { call, put, takeEvery } from 'redux-saga/effects';
import { GET, DELETE, UPDATE, ADD, DELETEItem, GETItem, ADDItem, UPDATEItem } from './Action';
import { getItem, addItem, deleteItem, updateItem } from './api';

// Saga để lấy dữ liệu
function* layDuLieuSaga() {
    try {
        const response = yield call(getItem);
        yield put(GETItem(response.data));
    } catch (error) {
        console.log(error.message);
    }
}

// Saga để thêm dữ liệu
function* themDuLieu(action) {
    try {
        const response = yield call(addItem, action.payload);
        yield put(ADDItem(response.data));
    } catch (error) {
        console.log(error.message);
    }
}

// Saga để cập nhật dữ liệu
function* capNhatDuLieuSaga(action) {
    try {
        const response = yield call(updateItem, action.payload);
        yield put(UPDATEItem(response.data));
    } catch (error) {
        console.log(error.message);
    }
}

// Saga để xóa dữ liệu
function* xoaDuLieu(action) {
    try {
        yield call(deleteItem, action.payload);
        yield put(DELETEItem(action.payload));
    } catch (error) {
        console.log(error.message);
    }
}

// Root Saga
export default function* rootSaGa() {
    yield takeEvery(GET, layDuLieuSaga);
    yield takeEvery(ADD, themDuLieu);
    yield takeEvery(UPDATE, capNhatDuLieuSaga);
    yield takeEvery(DELETE, xoaDuLieu); // Sử dụng takeEvery mà không cần debounce
}
