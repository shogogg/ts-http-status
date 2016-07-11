/**
 * Copyright (c) 2016 shogogg <shogo@studofly.net>
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
import * as assert from "power-assert";
import {HttpStatus} from "../index";

describe("HttpStatus", () => {
  describe("CONTINUE", () => {
    it("should equals 100.",  () => assert(HttpStatus.CONTINUE === 100))
  });
  describe("SWITCHING_PROTOCOLS", () => {
    it("should equals 101.", () => assert(HttpStatus.SWITCHING_PROTOCOLS === 101))
  });
  describe("OK", () => {
    it("should equals 200.", () => assert(HttpStatus.OK === 200))
  });
  describe("CREATED", () => {
    it("should equals 201.", () => assert(HttpStatus.CREATED === 201))
  });
  describe("ACCEPTED", () => {
    it("should equals 202.", () => assert(HttpStatus.ACCEPTED === 202))
  });
  describe("NON_AUTHORITATIVE_INFORMATION", () => {
    it("should equals 203.", () => assert(HttpStatus.NON_AUTHORITATIVE_INFORMATION === 203))
  });
  describe("NO_CONTENT", () => {
    it("should equals 204.", () => assert(HttpStatus.NO_CONTENT === 204))
  });
  describe("RESET_CONTENT", () => {
    it("should equals 205.", () => assert(HttpStatus.RESET_CONTENT === 205))
  });
  describe("PARTIAL_CONTENT", () => {
    it("should equals 206.", () => assert(HttpStatus.PARTIAL_CONTENT === 206))
  });
  describe("MULTIPLE_CHOICES", () => {
    it("should equals 300.", () => assert(HttpStatus.MULTIPLE_CHOICES === 300))
  });
  describe("MOVED_PERMANENTLY", () => {
    it("should equals 301.", () => assert(HttpStatus.MOVED_PERMANENTLY === 301))
  });
  describe("FOUND", () => {
    it("should equals 302.", () => assert(HttpStatus.FOUND === 302))
  });
  describe("SEE_OTHER", () => {
    it("should equals 303.", () => assert(HttpStatus.SEE_OTHER === 303))
  });
  describe("NOT_MODIFIED", () => {
    it("should equals 304.", () => assert(HttpStatus.NOT_MODIFIED === 304))
  });
  describe("USE_PROXY", () => {
    it("should equals 305.", () => assert(HttpStatus.USE_PROXY === 305))
  });
  describe("TEMPORARY_REDIRECT", () => {
    it("should equals 307.", () => assert(HttpStatus.TEMPORARY_REDIRECT === 307))
  });
  describe("BAD_REQUEST", () => {
    it("should equals 400.", () => assert(HttpStatus.BAD_REQUEST === 400))
  });
  describe("UNAUTHORIZED", () => {
    it("should equals 401.", () => assert(HttpStatus.UNAUTHORIZED === 401))
  });
  describe("PAYMENT_REQUIRED", () => {
    it("should equals 402.", () => assert(HttpStatus.PAYMENT_REQUIRED === 402))
  });
  describe("FORBIDDEN", () => {
    it("should equals 403.", () => assert(HttpStatus.FORBIDDEN === 403))
  });
  describe("NOT_FOUND", () => {
    it("should equals 404.", () => assert(HttpStatus.NOT_FOUND === 404))
  });
  describe("METHOD_NOT_ALLOWED", () => {
    it("should equals 405.", () => assert(HttpStatus.METHOD_NOT_ALLOWED === 405))
  });
  describe("NOT_ACCEPTABLE", () => {
    it("should equals 406.", () => assert(HttpStatus.NOT_ACCEPTABLE === 406))
  });
  describe("PROXY_AUTHENTICATION_REQUIRED", () => {
    it("should equals 407.", () => assert(HttpStatus.PROXY_AUTHENTICATION_REQUIRED === 407))
  });
  describe("REQUEST_TIMEOUT", () => {
    it("should equals 408.", () => assert(HttpStatus.REQUEST_TIMEOUT === 408))
  });
  describe("CONFLICT", () => {
    it("should equals 409.", () => assert(HttpStatus.CONFLICT === 409))
  });
  describe("GONE", () => {
    it("should equals 410.", () => assert(HttpStatus.GONE === 410))
  });
  describe("LENGTH_REQUIRED", () => {
    it("should equals 411.", () => assert(HttpStatus.LENGTH_REQUIRED === 411))
  });
  describe("PRECONDITION_FAILED", () => {
    it("should equals 412.", () => assert(HttpStatus.PRECONDITION_FAILED === 412))
  });
  describe("REQUEST_ENTITY_TOO_LARGE", () => {
    it("should equals 413.", () => assert(HttpStatus.REQUEST_ENTITY_TOO_LARGE === 413))
  });
  describe("REQUEST_URI_TOO_LONG", () => {
    it("should equals 414.", () => assert(HttpStatus.REQUEST_URI_TOO_LONG === 414))
  });
  describe("UNSUPPORTED_MEDIA_TYPE", () => {
    it("should equals 415.", () => assert(HttpStatus.UNSUPPORTED_MEDIA_TYPE === 415))
  });
  describe("REQUESTED_RANGE_NOT_SATISFIABLE", () => {
    it("should equals 416.", () => assert(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE === 416))
  });
  describe("EXPECTATION_FAILED", () => {
    it("should equals 417.", () => assert(HttpStatus.EXPECTATION_FAILED === 417))
  });
  describe("UNPROCESSABLE_ENTITY", () => {
    it("should equals 422.", () => assert(HttpStatus.UNPROCESSABLE_ENTITY === 422))
  });
  describe("FAILED_DEPENDENCY", () => {
    it("should equals 424.", () => assert(HttpStatus.FAILED_DEPENDENCY === 424))
  });
  describe("TOO_MANY_REQUESTS", () => {
    it("should equals 429.", () => assert(HttpStatus.TOO_MANY_REQUESTS === 429))
  });
  describe("UNAVAILABLE_FOR_LEGAL_REASONS", () => {
    it("should equals 451.", () => assert(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS === 451))
  });
  describe("INTERNAL_SERVER_ERROR", () => {
    it("should equals 500.", () => assert(HttpStatus.INTERNAL_SERVER_ERROR === 500))
  });
  describe("NOT_IMPLEMENTED", () => {
    it("should equals 501.", () => assert(HttpStatus.NOT_IMPLEMENTED === 501))
  });
  describe("BAD_GATEWAY", () => {
    it("should equals 502.", () => assert(HttpStatus.BAD_GATEWAY === 502))
  });
  describe("SERVICE_UNAVAILABLE", () => {
    it("should equals 503.", () => assert(HttpStatus.SERVICE_UNAVAILABLE === 503))
  });
  describe("GATEWAY_TIMEOUT", () => {
    it("should equals 504.", () => assert(HttpStatus.GATEWAY_TIMEOUT === 504))
  });
  describe("HTTP_VERSION_NOT_SUPPORTED", () => {
    it("should equals 505.", () => assert(HttpStatus.HTTP_VERSION_NOT_SUPPORTED === 505))
  });
  describe("INSUFFICIENT_STORAGE", () => {
    it("should equals 507.", () => assert(HttpStatus.INSUFFICIENT_STORAGE === 507))
  });
});
