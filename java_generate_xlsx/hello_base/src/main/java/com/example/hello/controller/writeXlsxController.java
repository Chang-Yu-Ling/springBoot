package com.example.hello.controller;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.hello.EntityNotFoundException;

import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
 
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.RegionUtil;
import org.apache.poi.xslf.usermodel.VerticalAlignment;
import org.apache.poi.xssf.usermodel.*;
 

// reference_backend: https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/
// reference_frontend: https://ithelp.ithome.com.tw/articles/10312869

@CrossOrigin(origins = "http://localhost:9000")
@RestController
@RequestMapping("/api")
public class writeXlsxController {
    @GetMapping("/v1/xlsx")
    public ResponseEntity<Dictionary<String, String>> helloXlsx(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @GetMapping("/v1/xlsx/w")
    public ResponseEntity<Dictionary<String, String>> writeXlsx(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            main(null);

            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @GetMapping("/v1/xlsx/wColor")
    public ResponseEntity<Dictionary<String, String>> writeColorXlsx(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            mainColor(null);

            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }

     @GetMapping("/v1/xlsx/load")
     public ResponseEntity<ByteArrayResource> downloadTemplate() throws Exception {
         try {
             ByteArrayOutputStream stream = new ByteArrayOutputStream();
             XSSFWorkbook workbook = mainLoad(null); // creates the workbook
             HttpHeaders header = new HttpHeaders();
             header.setContentType(new MediaType("application", "force-download"));
             header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ProductTemplate.xlsx");
             workbook.write(stream);
            //  workbook.close();
             return new ResponseEntity<>(new ByteArrayResource(stream.toByteArray()),
                     header, HttpStatus.CREATED);
         } catch (Exception e) {
            //  log.error(e.getMessage());
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
     }

    /**
     *  時間序號
     * */
    private static String getTimeNumber() {
        String pattern = "yyyyMMddHHmmssSSS";
        SimpleDateFormat d = new SimpleDateFormat(pattern);
        return d.format(new Date());
    }
    public static void main(String[] args) {
                 
        @SuppressWarnings("resource")
        // 新建工作簿
        XSSFWorkbook book = new XSSFWorkbook();
        // 建立工作表
        XSSFSheet sheet = book.createSheet("Books");
 
        Object[][] buffer = { 
                { "Head First Java", "Kathy Serria", 79 }, 
                { "Effective Java", "Joshua Bloch", 36 },
                { "Clean Code", "Robert martin", 42 }, 
                { "Thinking in Java", "Bruce Eckel", 35 }, 
                };
 
        int rowIdx = -1;
        int colIdx = -1;
         
        CellRangeAddress cellAddr;
        int firstRow, lastRow, firstCol, lastCol;
         
        XSSFRow row;
        XSSFCell cell;
        for (Object[] arrs : buffer) {
            // 建立行
            row = sheet.createRow(++rowIdx);
            firstRow = lastRow = rowIdx;
 
            colIdx = -1;
            firstCol = (colIdx + 1);
            for (Object field : arrs) {
                // 建立單元格
                cell = row.createCell(++colIdx);
                 
                // 單元格寫入內容
                if (field instanceof String) {
                    cell.setCellValue((String) field);
                } else if (field instanceof Integer) {
                    cell.setCellValue((Integer) field);
                }
            }
            lastCol = colIdx;
             
            // BorderStyle.THICK 粗邊框
            cellAddr = new CellRangeAddress(firstRow, lastRow, firstCol, lastCol);
            RegionUtil.setBorderBottom(10, cellAddr, sheet,book);
        }
 
        // 指定檔案名稱
        String fileName = "JavaBooks_%1$s.xlsx";
        fileName = String.format(fileName, getTimeNumber());
         
        /*
         * 尚未指定檔案路徑，檔案建立在本執行專案內
         * 儲存工作簿
         * */
        try (FileOutputStream os = new FileOutputStream(fileName)) {
            book.write(os);
            System.out.println(fileName + " excel export finish.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
     
    public static XSSFWorkbook mainLoad(String[] args) {
                 
        @SuppressWarnings("resource")
        // 新建工作簿
        XSSFWorkbook book = new XSSFWorkbook();
        // 建立工作表
        XSSFSheet sheet = book.createSheet("Books");
 
        Object[][] buffer = { 
                { "Head First Java", "Kathy Serria", 79 }, 
                { "Effective Java", "Joshua Bloch", 36 },
                { "Clean Code", "Robert martin", 42 }, 
                { "Thinking in Java", "Bruce Eckel", 35 }, 
                };
 
        int rowIdx = -1;
        int colIdx = -1;
         
        CellRangeAddress cellAddr;
        int firstRow, lastRow, firstCol, lastCol;
         
        XSSFRow row;
        XSSFCell cell;
        for (Object[] arrs : buffer) {
            // 建立行
            row = sheet.createRow(++rowIdx);
            firstRow = lastRow = rowIdx;
 
            colIdx = -1;
            firstCol = (colIdx + 1);
            for (Object field : arrs) {
                // 建立單元格
                cell = row.createCell(++colIdx);
                 
                // 單元格寫入內容
                if (field instanceof String) {
                    cell.setCellValue((String) field);
                } else if (field instanceof Integer) {
                    cell.setCellValue((Integer) field);
                }
            }
            lastCol = colIdx;
             
            // BorderStyle.THICK 粗邊框
            cellAddr = new CellRangeAddress(firstRow, lastRow, firstCol, lastCol);
            RegionUtil.setBorderBottom(10, cellAddr, sheet,book);
        }
 
        // 指定檔案名稱
        String fileName = "JavaBooks_%1$s.xlsx";
        fileName = String.format(fileName, getTimeNumber());
         
        /*
         * 尚未指定檔案路徑，檔案建立在本執行專案內
         * 儲存工作簿
         * */
        // try (FileOutputStream os = new FileOutputStream(fileName)) {
        //     book.write(os);
        //     System.out.println(fileName + " excel export finish.");
        // } catch (Exception e) {
        //     e.printStackTrace();
        // }
        return book;
    }

    
    public static void mainColor(String[] args) {
 
        @SuppressWarnings("resource")
        XSSFWorkbook book = new XSSFWorkbook();
 
        Font titlefont = book.createFont();
        titlefont.setColor(IndexedColors.BLACK.getIndex());// 顏色
        // titlefont.setBold(true); // 粗體
 
        CellStyle style01 = book.createCellStyle();
        style01.setFillForegroundColor(IndexedColors.LIGHT_GREEN.getIndex());// 填滿顏色
        // style01.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style01.setFont(titlefont);// 設定字體
        // style01.setAlignment(HorizontalAlignment.CENTER);// 水平置中
        // style01.setVerticalAlignment(VerticalAlignment.CENTER);// 垂直置中
 
        // 設定框線
        // style01.setBorderBottom(BorderStyle.THIN);
        // style01.setBorderTop(BorderStyle.THIN);
        // style01.setBorderLeft(BorderStyle.THIN);
        // style01.setBorderRight(BorderStyle.THIN);
        style01.setWrapText(true);// 自動換行
 
        CellStyle style02 = book.createCellStyle();
        // style02.setAlignment(HorizontalAlignment.CENTER);// 水平置中
        // style02.setVerticalAlignment(VerticalAlignment.CENTER);// 垂直置中
        // style02.setBorderBottom(BorderStyle.THICK);
        // style02.setBorderTop(BorderStyle.THICK);
        // style02.setBorderLeft(BorderStyle.THICK);
        // style02.setBorderRight(BorderStyle.THICK);
        style02.setWrapText(true);// 自動換行
 
        XSSFSheet sheet1 = book.createSheet("工作表1");
 
        XSSFRow titlerow = sheet1.createRow(0);
        for (int i = 0; i < 6; i++) {
            XSSFCell cell = titlerow.createCell(i);
            cell.setCellStyle(style01);
            cell.setCellValue("標題 Cell 0 " + i);
            // sheet1.autoSizeColumn(i); // 自動調整欄位寬度
        }
 
        for (int x = 1; x < 10; x++) {
            XSSFRow row = sheet1.createRow(x);
 
            for (int y = 0; y < 6; y++) {
                XSSFCell cell = row.createCell(y);
                cell.setCellStyle(style02);
 
                cell.setCellValue("中文 Cell " + x + " " + y);
                // sheet1.autoSizeColumn(y); // 自動調整欄位寬度
            }
 
            XSSFCell cell = row.createCell(5);
            cell.setCellValue(100);
            cell.setCellStyle(style02);
            // sheet1.autoSizeColumn(5);
        }
 
        XSSFSheet sheet2 = book.createSheet("工作表2");
        for (int x = 0; x < 5; x++) {
            XSSFRow row = sheet2.createRow(x);
 
            for (int y = 0; y < 5; y++) {
                XSSFCell cell = row.createCell(y);
 
                if (x == 0) {
                    cell.setCellStyle(style01);
                } else {
                    cell.setCellStyle(style02);
                }
 
                cell.setCellValue("中文 title " + x + " " + y);
 
                // sheet2.autoSizeColumn(y); // 自動調整欄位寬度
            }
        }
 
        // 指定檔案名稱
        String fileName = "Test_%1$s.xlsx";
        fileName = String.format(fileName, getTimeNumber());
 
        /*
         * 尚未指定檔案路徑，檔案建立在本執行專案內 儲存工作簿
         */
        try (FileOutputStream os = new FileOutputStream(fileName)) {
            book.write(os);
            System.out.println(fileName + " excel export finish.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}