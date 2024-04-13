FROM golang AS builder

WORKDIR /go/src/app

COPY . .

RUN go build -o /go/bin/app

FROM scratch

COPY --from=builder /go/bin/app /go/bin/app

ENTRYPOINT ["/go/bin/app"]